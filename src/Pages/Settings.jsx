import React, { useState, useRef } from 'react';
import Icons from "./Icons";
import Navbar from '../Components/Navbar';
import { auth, db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from '../Contexts/AuthContext';

export default function Dashboard() {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState([]);
    const [menuOpen, setMenuOpen] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [schoolCity, setSchoolCity] = useState("");
    const [schoolState, setSchoolState] = useState("");
    const [schoolMajor, setSchoolMajor] = useState("");

    const inputRef = useRef(null);

    const tags = [
        "git", "javascript", "react", "angular", "data structures", "embedded systems", "go", "rust", "C#", "C++", "C", "golang", "java", "algorithms", "database", "SQL", "object oriented programming", "collaboration", "documentation", "backend", "distributed systems", "docker", "azure", "gcp", "linux", "rust", "jira", "XML", "html", "css", "typescript", "php", "tailwind", "bootstrap", "jQuery", "ajax", "vue", "node", "oracle", "postgresql", "mongodb", "mysql", "express", "springboot", "django", "flask", "graphql", "ux", "rest apis", "google cloud platform", "swift", "react native", "ruby", "python", "kotlin", "dart", "sql", "nosql", "postgres", "redis", "elasticsearch", "rabbitmq"
    ];

    const filteredTags = tags.filter(
        (item) =>
            item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
            !selected.includes(item)
    );

    const isDisable =
        !query?.trim() ||
        selected.filter(
            (item) =>
                item?.toLocaleLowerCase()?.trim() === query?.toLocaleLowerCase()?.trim()
        )?.length;

    const { currentUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, {
            firstName,
            lastName,
            phoneNumber,
            city,
            state,
            linkedin,
            github,
            schoolName,
            schoolCity,
            schoolState,
            schoolMajor,
        });
        alert("Profile Updated Successfully!");
    };
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input id="grid-last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                                Phone Number
                            </label>
                            <input id="grid-phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="******************" />
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                City
                            </label>
                            <input id="grid-city" value={city} onChange={(e) => setCity(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Albuquerque" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={state} onChange={(e) => setState(e.target.value)}>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                    <option value="California">California</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Connecticut">Connecticut</option>
                                    <option value="Delaware">Delaware</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Idaho">Idaho</option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Indiana">Indiana</option>
                                    <option value="Iowa">Iowa</option>
                                    <option value="Kansas">Kansas</option>
                                    <option value="Kentucky">Kentucky</option>
                                    <option value="Louisiana">Louisiana</option>
                                    <option value="Maine">Maine</option>
                                    <option value="Maryland">Maryland</option>
                                    <option value="Massachusetts">Massachusetts</option>
                                    <option value="Michigan">Michigan</option>
                                    <option value="Minnesota">Minnesota</option>
                                    <option value="Mississippi">Mississippi</option>
                                    <option value="Missouri">Missouri</option>
                                    <option value="Montana">Montana</option>
                                    <option value="Nebraska">Nebraska</option>
                                    <option value="Nevada">Nevada</option>
                                    <option value="New Hampshire">New Hampshire</option>
                                    <option value="New Jersey">New Jersey</option>
                                    <option value="New Mexico">New Mexico</option>
                                    <option value="New York">New York</option>
                                    <option value="North Carolina">North Carolina</option>
                                    <option value="North Dakota">North Dakota</option>
                                    <option value="Ohio">Ohio</option>
                                    <option value="Oklahoma">Oklahoma</option>
                                    <option value="Oregon">Oregon</option>
                                    <option value="Pennsylvania">Pennsylvania</option>
                                    <option value="Rhode Island">Rhode Island</option>
                                    <option value="South Carolina">South Carolina</option>
                                    <option value="South Dakota">South Dakota</option>
                                    <option value="Tennessee">Tennessee</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Utah">Utah</option>
                                    <option value="Vermont">Vermont</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Washington">Washington</option>
                                    <option value="West Virginia">West Virginia</option>
                                    <option value="Wisconsin">Wisconsin</option>
                                    <option value="Wyoming">Wyoming</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="linkedin">
                                LinkedIn
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="linkedin"
                                type="text"
                                placeholder="LinkedIn profile URL"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="github">
                                GitHub
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="github"
                                type="text"
                                placeholder="GitHub profile URL"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="schoolName">
                                School Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="schoolName"
                                type="text"
                                placeholder="School Name"
                                value={schoolName}
                                onChange={(e) => setSchoolName(e.target.value)}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="schoolCity">
                                School City
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="schoolCity"
                                type="text"
                                placeholder="School City"
                                value={schoolCity}
                                onChange={(e) => setSchoolCity(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="schoolState">
                                School State
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="schoolState"
                                type="text"
                                placeholder="School State"
                                value={schoolState}
                                onChange={(e) => setSchoolState(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="schoolMajor">
                                School Major
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="schoolMajor"
                                type="text"
                                placeholder="School Major"
                                value={schoolMajor}
                                onChange={(e) => setSchoolMajor(e.target.value)}
                            />
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-auto px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-schoolMajor">
                                Skills
                            </label>
                            <div className="relative w-80 h-96 text-sm">
                                {selected?.length ? (
                                    <div className="bg-white w-80 relative text-xs flex flex-wrap gap-1 p-2 mb-2">
                                        {selected.map((tag) => {
                                            return (
                                                <div
                                                    key={tag}
                                                    className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500
                  flex items-center gap-2"
                                                >
                                                    {tag}
                                                    <div
                                                        onMouseDown={(e) => e.preventDefault()}
                                                        onClick={() =>
                                                            setSelected(selected.filter((i) => i !== tag))
                                                        }
                                                    >
                                                        <Icons.Close />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        <div className="w-full text-right">
                                            <span
                                                className="text-gray-400 cursor-pointer"
                                                onClick={() => {
                                                    setSelected([]);
                                                    inputRef.current?.focus();
                                                }}
                                            >
                                                Clear all
                                            </span>
                                        </div>
                                    </div>
                                ) : null}
                                <div className="card flex items-center justify-between p-3 w-80 gap-2.5">
                                    <Icons.Search />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value.trimStart())}
                                        placeholder="Search or Create tags"
                                        className="bg-transparent text-sm flex-1 caret-rose-600"
                                        onFocus={() => setMenuOpen(true)}
                                        onBlur={() => setMenuOpen(false)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !isDisable) {
                                                setSelected((prev) => [...prev, query]);
                                                setQuery("");
                                                setMenuOpen(true);
                                            }
                                        }}
                                    />
                                    <button
                                        className="text-sm disabled:text-gray-300 text-rose-500 disabled:cursor-not-allowed"
                                        disabled={isDisable}
                                        onClick={() => {
                                            if (isDisable) {
                                                return;
                                            }
                                            setSelected((prev) => [...prev, query]);
                                            setQuery("");
                                            inputRef.current?.focus();
                                            setMenuOpen(true);
                                        }}
                                    >
                                        + Add
                                    </button>
                                </div>

                                {menuOpen ? (
                                    <div className="card absolute w-full max-h-52 mt-2 p-1 flex overflow-y-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
                                        <ul className="w-full">
                                            {filteredTags?.length ? (
                                                filteredTags.map((tag, i) => (
                                                    <li
                                                        key={tag}
                                                        className="p-2 cursor-pointer hover:bg-rose-50 hover:text-rose-500 rounded-md w-full"
                                                        onMouseDown={(e) => e.preventDefault()}
                                                        onClick={() => {
                                                            setMenuOpen(true);
                                                            setSelected((prev) => [...prev, tag]);
                                                            setQuery("");
                                                        }}
                                                    >
                                                        {tag}
                                                    </li>
                                                ))
                                            ) : (
                                                <li className="p-2 text-gray-500">No options available</li>
                                            )}
                                        </ul>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Update
                    </button>
                </form>
            </div>
            
        </>
    )
}