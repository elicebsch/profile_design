
import Search from "@/app/components/search-bar";
import CreateEmployee from "@/app/components/create_employee";
import EmployeesTable from "@/app/components/tables/table-employees";
import { fetchProjects, fetchProjectById } from "@/src/lib/data";

// searchParams und params werden automatisch von nextJS übergeben
export default async function MitarbeiterPage(props: { 
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {

    const searchParams = await props.searchParams;

    const projects = await fetchProjects();

    return (
        <div>

            <div className="flex gap-2 p-2">
                <Search placeholder="Suche nach Mitarbeiter" /> 
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