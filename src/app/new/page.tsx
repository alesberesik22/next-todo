import '../globals.scss'
import './new.scss'
import React from 'react';
import Link from "next/link";
import {prisma} from "@/db";
import {redirect} from "next/navigation";

async function createFunction(data: FormData) {
    'use server'
    const title = data.get('title')?.valueOf();
    if( typeof title !== 'string' || title.length === 0) {
        throw new Error('Invalid title');
    }

    await prisma.todo.create({data:{
            title,
            complete:false
        }})
    redirect('/')
    console.log('hi')
}

const Page = () => {
    return (
        <>
            <header className='header'>
                <h1>New</h1>
            </header>
            <form action={createFunction}>
                <input type={'text'} name={'title'} required={true} className={'new-input'}/>
                <div className={'buttons'}>
                    <Link href={'..'} className={'cancel'}>Cancel</Link>
                    <button type={'submit'}>Create</button>
                </div>
            </form>
        </>
    );
};

export default Page;
