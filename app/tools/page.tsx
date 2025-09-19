import Search from "./components/search-bar";


export default function Page() {
    return (
        <div>
            <div>
                <h1 className="p-6">Mitarbeiter Übersicht</h1>
            </div>
            <Search placeholder="Suche nach Mitarbeiter" />

        </div>
    );
}