
import Search from "@/app/components/search-bar";
import CreateEmployee from "@/app/components/create_employee";
import EmployeesTable from "@/app/components/tables/table-employees";
import { fetchProjectsById } from "@/src/lib/data";

export default async function MitarbeiterPage(props: { // searchParams und params werden automatisch von nextJS übergeben
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {

    const searchParams = await props.searchParams;

    const projects = await fetchProjectsById();

    return (
        <div>

            <div className="flex">
                <Search placeholder="Suche nach Mitarbeiter" /> {/* not synchronized yet */}
                <CreateEmployee />
            </div>
            <div>
                <div>
                    <h1 className="p-6">Mitarbeiter Übersicht</h1>
                </div>
                {/* Show Table of Employees */}
                <EmployeesTable searchParams={searchParams} />

            </div>

        </div>
    );
}