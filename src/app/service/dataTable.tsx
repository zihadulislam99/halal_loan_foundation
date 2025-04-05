import React from "react";

const songs = [
    {
        id: 1,
        image: "https://img.daisyui.com/images/profile/demo/1@94.webp",
        artist: "Dio Lupa",
        title: "Remaining Reason",
    },
    {
        id: 2,
        image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
        artist: "Ellie Beilish",
        title: "Bears of a Fever",
    },
    {
        id: 3,
        image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
        artist: "Sabrino Gardener",
        title: "Cappuccino",
    },
];

const dataTable = () => (
    <div>
        <ul className="w-full mt-5 rounded-xl shadow-md p-4 bg-slate-50">
            <li className="pb-2 text-xs mopacity-60 tracking-wide">Most played songs this week</li>
            {songs.map((song) => (
                <li className="w-full list-row flex items-center justify-between p-2 border-b border-base-400">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <img className="w-10 rounded-full object-cover " src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg"} alt={song.artist} />
                            <div>
                                <div>{song.artist}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">{song.title}</div>
                            </div>
                        </div>
                        <div className="flex flex-col px-96">
                            <div>{song.artist}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{song.title}</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-square btn-ghost">
                            <svg
                                className="size-[1.2em]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                    <path d="M6 3L20 12 6 21 6 3z"></path>
                                </g>
                            </svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                            <svg
                                className="size-[1.2em]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default dataTable;