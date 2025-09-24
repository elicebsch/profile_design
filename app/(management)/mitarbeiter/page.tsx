
import Search from "@/app/components/search-bar";
import CreateEmployee from "@/app/components/create_employee";
import EmployeesTable from "@/app/components/Tables/table-employees";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {

    const searchParams = await props.searchParams;

    return (
        <div>

            <div className="flex">
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