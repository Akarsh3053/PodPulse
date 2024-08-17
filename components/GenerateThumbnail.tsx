import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Loader } from "lucide-react";
import { GenerateThumbnailProps } from "@/types";
import { Input } from "./ui/input";
import Image from "next/image";

const GenerateThumbnail = ({ setImage, setImageStorageId, image, imagePrompt, setImagePrompt }: GenerateThumbnailProps) => {
    const [isAiTHumbnail, setIsAiTHumbnail] = useState(false);
    const [isImageLoading, setImageLoading] = useState(false);
    const imageRef = useRef<HTMLInputElement>(null);

    const generateImage = async () => { }

    return (
        <>
            <div className="generate_thumbnail">
                <Button
                    type="button"
                    variant="plain"
                    onClick={() => setIsAiTHumbnail(true)}
                    className={cn("", {
                        'bg-black-6': isAiTHumbnail
                    })}
                >
                    Use AI generated Thumbnail
                </Button>
                <Button
                    type="button"
                    variant="plain"
                    onClick={() => setIsAiTHumbnail(false)}
                    className={cn("", {
                        'bg-black-6': !isAiTHumbnail
                    })}
                >
                    Upload custom Thumbnail
                </Button>
            </div>
            {isAiTHumbnail ? (
                <div className="flex flex-col gap-5 mt-5">
                    <div className="flex flex-col gap-2.5">
                        <Label className="text-16 font-bold text-white-1">
                            AI prompt to generate Thumbnail
                        </Label>
                        <Textarea
                            rows={5}
                            value={imagePrompt}
                            placeholder="Provide text to generate audio"
                            onChange={(e) => setImagePrompt(e.target.value)}
                            className="input-class font-light focus-visible:ring-offset-orange-1"
                        />
                    </div>
                    <div className="w-full max-w-[200px]">
                        <Button type="submit" className="text-16 bg-orange-1 py-4 font-bold text-white-1" onClick={generateImage}>
                            {isImageLoading ? (
                                <>
                                    Generating
                                    <Loader size={20} className="animate-spin ml-2" />
                                </>
                            ) : ('Generate')}
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="image_div" onClick={() => imageRef?.current?.click()}>
                    <Input
                        type="file"
                        className="hidden"
                        ref={imageRef}
                    // onChange={(e)=> uploadImage(e)}
                    />
                    {!isImageLoading ? (
                        <Image
                            src="/icons/upload-image.svg"
                            alt="upload icon"
                            width={40}
                            height={40}
                        />
                    ) : (
                        <div className="text-16 flex-center font-medium text-white-1">
                            Uploading
                            <Loader size={20} className="animate-spin ml-2" />
                        </div>
                    )}
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-12 font-bold text-orange-1">Click to upload</h2>
                        <p className="text-12 font-normal text-gray-1">SVG, PNG, JPG or GIF (max, 1080x1080px)</p>
                    </div>
                </div>
            )}
            {image && (
                <div className="flex-center w-full">
                    <Image
                        className="mt-5"
                        src={image}
                        width={200}
                        height={200}
                        alt="Thumbnail"
                    />
                </div>
            )}
        </>
    )
}

export default GenerateThumbnail