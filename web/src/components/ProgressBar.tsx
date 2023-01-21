import * as Progress from "@radix-ui/react-progress";
import React from "react";

interface ProgressBarProps{
    progress: number
}

export function ProgressBar(props: ProgressBarProps){


        return (
        <div className="h-3 w-full bg-zinc-700 rounded-xl mt-4">
            <div
                role="progressbar"
                aria-label="Progress of habit completed this day"
                aria-valuenow={props.progress}
                className=" h-3 bg-cyan-600 rounded-xl "
                style={{width: `${props.progress}%`}}
            />
        </div>
    )
}
