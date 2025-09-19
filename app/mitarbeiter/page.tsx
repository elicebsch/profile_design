import Search from "./components/search-bar";
import CreateEmployee from "./components/add_employee";
import EmployeesTable from "./components/table-employees";

export default function Page() {
    return (
        <div>
            <div>
                <h1 className="p-6">Mitarbeiter Übersicht</h1>
            </div>
            <div className="flex">
                <Search placeholder="Suche nach Mitarbeiter" />
                <CreateEmployee/>
            </div>
            <div>
                {/* Show Table of Employees */}
                <EmployeesTable/>

            </div>

        </div>
    );
}