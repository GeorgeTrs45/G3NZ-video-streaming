import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
//    publicRoutes:["/users"]     //for public routes, without use of login like home page
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};