"use client";
import { useState } from "react";
import styles from "./attendance.module.scss";

export default function AttendanceForm() {
  const [attendance, setAttendance] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    formDatab.append("attendance", attendance);

    setLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbyp-VVf7afBotIsgC1eyVI0W7mRFyMcV9CtAetHuD6tHnOegquXUoCv-Gojfx8eHMo/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // setIsSubmitted(true);
        setAttendance("");
        setTitle("");
        setText("");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  if (isSubmitted) {
    return (
      <div className={styles.App}>
        <p className="text-center min-w-[300px] text-[18px] sm:text-[20px] mb-[10px]">
          Cіздің жауабыңыз қабылданды!
        </p>
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <div className="form center mb-20">
        <p
          className={`${styles.anketa} text-center min-w-[300px] text-[18px] sm:text-[20px] mb-[10px]`}
        >
          Анкетаны толтыруыңызды сұраймыз
        </p>

        <p
          className={`${styles.anketa} text-center min-w-[300px] text-[18px] sm:text-[20px] mb-[10px]`}
        >
          Біз үшін өте маңызды!
        </p>
        <div className="min-w-[300px]: mx-[20px] sm: mx-auto relative mt-6">
          <form className="form" onSubmit={(e) => Submit(e)}>
            <div className="min-w-[300px]: mx-5">
              <input
                className="min-w-[300px]:text-[14px] sm:text-[20px]"
                placeholder="Атыңыз"
                name="Name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="h-[100px] min-w-[300px]:text-[14px] sm:text-[20px]"
                placeholder="Тілектеріңіз"
                name="Message"
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </div>
            <div className={styles.radio}>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="willAttend"
                  value="Келемін"
                  checked={attendance === "Келемін"}
                  onChange={() => setAttendance("Келемін")}
                />
                <label htmlFor="willAttend" className="ml-2">
                  Келемін
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="willAttendWithWife"
                  value="Жұбайымен"
                  checked={attendance === "Жұбайымен"}
                  onChange={() => setAttendance("Жұбайымен")}
                />
                <label htmlFor="willAttendWithWife" className="ml-2">
                  Жұбайымен
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cannotAttend"
                  value="Келе алмаймын"
                  checked={attendance === "Келе алмаймын"}
                  onChange={() => setAttendance("Келе алмаймын")}
                />
                <label htmlFor="cannotAttend" className="ml-2">
                  Келе алмаймын
                </label>
              </div>
            </div>
            <div className="flex-1 flex justify-center min-w-[300px]: mx-5">
              <button
                className={styles.button}
                type="submit"
                disabled={isLoading}
              >
                Жіберу
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
