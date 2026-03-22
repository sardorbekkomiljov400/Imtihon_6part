// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Link } from "@/i18n/navigation";
// import { LoginIcon1 } from "@/public/icons";
// import { SignIn } from "@/services";
// import { setCookie } from "cookies-next";
// import React, { useState } from "react";
// import { toast, Toaster } from "sonner";
// import { useRouter } from "next/navigation";

// const LoginPage = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.currentTarget;
//     const data = {
//       username: (form.username as HTMLInputElement).value.trim(),
//       password: (form.password as HTMLInputElement).value.trim(),
//     };

//     try {
//       const res = await SignIn(data);
//       const result = await res.json();

//       if (!res.ok) throw new Error(result.message || "Login failed");

//       setCookie("token", result.data.accessToken);
//       setCookie("user", `${result.data.user.firstName} ${result.data.user.lastName}`);

//       toast.success("Profilga muvaffaqiyatli kirdingiz!", { position: "top-center" });

//       router.push("/"); // sahifaga yo‘naltirish

//     } catch (error: any) {
//       toast.error("Xatolik yuz berdi: " + (error.message || "Server bilan bog'lanishda muammo"), { duration: 3000, position: "top-center" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="containers py-40 flex items-center justify-center relative">
//       <Toaster position="top-right" />
//       <form onSubmit={handleSubmit} className="w-115.75 bg-[#cccccc] rounded-[31px]">
//         <div className="flex flex-col items-start gap-8 py-10 px-13 relative pt-20 z-2">
//           <div className="bg-black px-7 py-6 rounded-full absolute -top-10 border-6 border-[#cccccc]">
//             <LoginIcon1 />
//           </div>
//           <h2 className="text-[32px] font-bold">Вход в аккаунт</h2>
//           <Input name="username" placeholder="Ваше имя пользователя" />
//           <Input name="password" type="password" placeholder="Пароль" />
//           <div className="flex w-full justify-center items-center flex-col gap-3">
//             <Button type="submit" disabled={loading}>
//               {loading ? "Loading..." : "Вход в аккаунт"}
//             </Button>
//             <Link href={"/Register"} className="text-[#06004C] text-xs cursor-pointer font-bold">
//               Еще нет учетной записи?
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;