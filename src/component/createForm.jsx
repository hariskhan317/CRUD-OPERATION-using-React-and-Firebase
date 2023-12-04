import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { db, auth } from '../config/firebase';  // Modified import
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

export const CreateForm = () => {
    const postSchema = yup.object().shape({
        title: yup.string().required("You must have title").min(6,"Title is short").max(10,"Exceding Limit"),
        description: yup.string().required("You must have description").min(10,"Description is short").max(300,"Exceding Limit"),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(postSchema)
    });

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const postRefs = collection(db, "posts")

    const onCreatePost = async (data) => {
        await addDoc(postRefs, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });
        navigate('/main');
    }

    return (
        <div className="px-32 py-20 mx-auto">
            <form onSubmit={handleSubmit(onCreatePost)} action="">
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div className="mt-2">
                        <input
                            type="text" 
                            name="title"    
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Title"
                            {...register("title")}
                        />
                                            {errors.title && <p className="text-red-500 font-semibold">{errors.title.message}</p>}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Description
                    </label>
                    <div className="mt-2">
                        <textarea
                        id="description"
                        name="description"
                        rows={3}
                        {...register("description")}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                                            {errors.description && <p className="text-red-500 font-semibold">{errors.description.message}</p>}
                    </div>
                </div>
                <input type="submit" className="bg-gray-300 p-3"/>
            </form>
        </div>
    )
}