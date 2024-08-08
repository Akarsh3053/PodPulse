import { useState } from "react"
import { Button } from "./ui/button"

const GenerateThumbnail = () => {
    const [isAiTHumbnail, setIsAiTHumbnail] = useState(false);


    return (
        <>
            <div className="generate_thumbnail">
                <Button
                    type="button"
                    variant="plain"
                    className="bg-black-6"
                >
                    Use AI generated Thumbnail
                </Button>
                <Button
                    type="button"
                    variant="plain"
                    className="bg-black-6"
                >
                    Upload custom Thumbnail
                </Button>
            </div>
        </>
    )
}

export default GenerateThumbnail