
import React from 'react'
import { db } from '@/src'
import { fetchEmployeesById, fetchEmployeesBySearchParams } from '@/src/lib/data'
import { title } from 'process';
import EmployeeCard from '../employee-card';


// soll aus EmployeeCards bestehen

async function EmployeesTable({ searchParams } 
  : {
    searchParams?
    : {
      query?: string,
      page?: string
    }
  }
) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const data = await fetchEmployeesBySearchParams(query);
  console.log(data);

  return (
    <div className='flex-col space-y-2'>
      {data.map((e) => (
        <div
          key={e.id}>
          <EmployeeCard
            id={e.id}
            firstName={e.firstName}
            lastName={e.lastName}
          />
        </div>
      ))}
    </div>
  )
}

export default EmployeesTable
