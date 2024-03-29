"use client";

import useGetSongByID from "@/hooks/useGetSongByID";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongByID(player.activeID);

    const songUrl = useLoadSongUrl(song!);

    if (!song || !songUrl || !player.activeID) {
        return null;
    }

    return (
        <div
            className="
                fixed
                bottom-0
                bg-black
                w-full
                py-2
                h-[80px]
                px-4
            "
        >
            Player!
        </div>
    );
}

export default Player;