export default function Header() {
    return (
        <section className="container my-16">
            <h1 className="text-4xl font-bold text-center">
                Find your dream<br />job here!
            </h1>
            <form className="flex gap-2 mt-4 max-w-md mx-auto">
                <input 
                    type="search" 
                    className="border border-gray-400 rounded-md px-3 py-2 w-full" 
                    placeholder="Search job here..."/>
                    <button 
                        className="bg-blue-600 text-white py-2 px-4 rounded-md ">
                        Search
                    </button>
            </form>
        </section>
    );
}