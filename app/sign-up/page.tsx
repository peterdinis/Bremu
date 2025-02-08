import { redirect } from 'next/navigation';
import React from 'react';
import zod from 'zod';
import { getCurrentSession, registerUser, loginUser } from '../_actions/auth';
import SignupForm from '../_components/auth/SignupForm';

const SignUpSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(5),
})

const SignUpPage = async () => {
    const { user } = await getCurrentSession();

    if (user) {
        return redirect('/');
    }

    const action = async (prevState: any, formData: FormData) => {
        "use server";
        const parsed = SignUpSchema.safeParse(Object.fromEntries(formData));
        if(!parsed.success) {
            return {
                message: "Invalid form data",
            };
        }

        const { email, password } = parsed.data;
        const { user, error } = await registerUser(email, password);
        if(error) {
            return { message: error };
        } else if(user) {
            await loginUser(email, password);
            return redirect("/");
        }
    }

    return <SignupForm action={action} />;
};

export default SignUpPage;