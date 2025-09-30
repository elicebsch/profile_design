'use client'

import React from 'react'

import { Employee } from '../validation/fetch-validation';
import { lusitana } from '../ui/fonts';
import { PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';


// Das soll hier auf die Mitarbeiter-Startseite in die EmployeeTable



function EmployeeCard({
    id,
    lastName,
    firstName,

}: {
    id: number,
    firstName: string,
    lastName: string
}) {

    return (
        <div className="rounded-xl bg-white shadow-md p-4 flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-800">
                {lastName}, {firstName}
            </div>
            <div className='flex gap-1'>
                <Link href={`/mitarbeiter/${id}/edit`}>
                    <button className="text-gray-500 hover:text-gray-700">
                        <PencilIcon className="h-5 w-5 hover:text-gray-700" />
                    </button>
                </Link>
                <Link href={`/mitarbeiter/${id}/merge`}>
                    <button className="text-gray-500 hover:text-gray-700">
                        <DocumentTextIcon className="h-5 w-5 hover:text-gray-700" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default EmployeeCard
