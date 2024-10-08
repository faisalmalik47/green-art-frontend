import { FormEvent, useEffect, useRef } from "react";
import GInit from "./gt4";
import { toast } from "react-toastify";

const Geetest = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    GInit();

    // @ts-ignore
    initGeetest4(
      {
        captchaId: "448a6f0dd6fe45d8ee651b0a07703660",
        product: "bind",
        onError: (err: any) => toast.error(err.msg),
      },
      handlerForBind
    );
  }, []);

  async function handlerForBind(c: any) {
    const button = btnRef.current;
    var isReady = false;

    c.onReady(() => {
      isReady = true;
    });

    button?.addEventListener("click", function () {
      if (isReady) {
        c.showCaptcha();
      }
    });

    c.onSuccess(async () => {
      var result = c.getValidate();

      const inputText = inputRef.current?.value;

      toast(() => (
        <span>
          Name: {inputText}
          <br />
          Pass Token: {result.pass_token}
        </span>
      ));

      toast.success("Captcha Success");
    });

    c.onError((err: any) => {
      toast.error(err.msg);
      c.reset();
    });
    c.onClose(() => {
      toast.error("Captcha Closed!");

      c.reset();
    });
    c.onFail((err: any) => {
      toast.error("Captcha Failed!");

      c.reset();
    });
  }

  async function handlerForFloatOrPopup(captcha: any) {
    // call appendTo to insert CAPTCHA into an element of the page, which can be customized by you
    captcha.appendTo("#captcha");

    captcha.onSuccess(() => {
      var result = captcha.getValidate();
    });
    captcha.onError(() => console.log("GT error: "));
    captcha.onClose(() => console.log("GT close: "));
    captcha.onFail(() => console.log("GT fail: "));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={inputRef} />

      <button type="submit" id="submitBtn" ref={btnRef}>
        Submit
      </button>
    </form>
  );
};

export default Geetest;
