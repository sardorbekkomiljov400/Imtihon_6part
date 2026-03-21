"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { LoginIcon1 } from "@/public/icons";
import { SignIn } from "@/services";
import { setCookie } from "cookies-next";
import React from "react";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  // Login Function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      username: (form.username as HTMLInputElement).value.trim(),
      password: (form.password as HTMLInputElement).value.trim(),
    };

    SignIn(data)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setCookie("token", data.data.accessToken);
        setCookie(
          "user",
          `${data.data.user.firstName} ${data.data.user.lastName}`
        );

        toast.success("Profilga muvaffaqiyatli kirdingiz!" , {position: "top-center"});

       setTimeout(() => {
        router.push("/")
      }, 2000)
      })
      .catch(error => {
        console.error(error);
        toast.error(
          "Xatolik yuz berdi: " + (error.message || "Server bilan bog'lanishda muammo"),
          { duration: 3000 }
        );
      });
  };

  return (
    <div className="containers py-40 flex items-center justify-center relative">
      {/* Toaster sahifada bitta bo‘lishi kerak */}
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="w-115.75 bg-[#cccccc] rounded-[31px]"
      >
        <div className="flex flex-col items-start gap-8 py-10 px-13 relative pt-20 z-2">
          <div className="bg-black px-7 py-6 rounded-full absolute -top-10 border-6 border-[#cccccc]">
            <LoginIcon1 />
          </div>
          <h2 className="text-[32px] font-bold">Вход в аккаунт</h2>
          <Input
            name="username"
            placeholder="Ваше имя пользователя"
            className="border-transparent border-b-black rounded-none px-0 py-5 text-base! placeholder:text-[#585858]"
          />
          <div className="w-full">
            <Input
              name="password"
              placeholder="Пароль"
              type="password"
              className="border-transparent border-b-black rounded-none px-0 py-5 text-base! placeholder:text-[#585858]"
            />
            <h2 className="cursor-pointer mt-3 text-xs font-semibold">
              Забыли пароль?
            </h2>
          </div>
          <div className="flex w-full justify-center items-center flex-col gap-3">
            <Button type="submit" className="cursor-pointer py-7! px-9! rounded-[13px] text-base">
              Вход в аккаунт
            </Button>
            <Link
              href={"/Register"}
              className="text-[#06004C] text-xs cursor-pointer font-bold"
            >
              Еще нет учетной записи?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;