import { GeneratePodcastProps } from "@/types"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Loader } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { useAction } from "convex/react"
import { api } from "@/convex/_generated/api"
import { v4 as uuidv4 } from "uuid"


const useGeneratePodcast = ({ setAudio, voiceType, voicePrompt, setAudioStorageId }: GeneratePodcastProps) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const getPodcastAudio = useAction(api.openai.generateAudioAction)

    const generatePodcast = async () => {
        setIsGenerating(true);
        setAudio('');


        if (!voicePrompt) {
            // todo: toaster
            return setIsGenerating(false);
        }

        try {
            // Logic goes here
            const response = await getPodcastAudio({
                voice: voiceType,
                input: voicePrompt
            })

            const blob = new Blob([response], { type: 'audio/mpeg' });
            const fileName = `podcast-${uuidv4()}.mp3`;
            const file = new File([blob], fileName, { type: 'audio/mpeg' });
        } catch (error) {
            console.log('Error generating podcast', error);
            // todo: error message 
            setIsGenerating(false);
        }

    }


    return {
        isGenerating,
        generatePodcast
    }
}

const GeneratePodcast = (props: GeneratePodcastProps) => {

    const { isGenerating, generatePodcast } = useGeneratePodcast(props);


    return (
        <div>
            <div className="flex flex-col gap-2.5">
                <Label className="text-16 font-bold text-white-1">
                    AI prompt to generate Podcast
                </Label>
                <Textarea
                    rows={5}
                    value={props.voicePrompt}
                    placeholder="Provide text to generate audio"
                    onChange={(e) => props.setVoicePrompt(e.target.value)}
                    className="input-class font-light focus-visible:ring-offset-orange-1"
                />
            </div>
            <div className="mt-5 w-full max-w-[200px]">
                <Button type="submit" className="text-16 bg-orange-1 py-4 font-bold text-white-1">
                    {isGenerating ? (
                        <>
                            Submitting
                            <Loader size={20} className="animate-spin ml-2" />
                        </>
                    ) : ('Generate')}
                </Button>
            </div>
            {props.audio && (
                <audio
                    controls
                    src={props.audio}
                    autoPlay
                    className="mt-5"
                    onLoadedMetadata={(e) => props.setAudioDuration(e.currentTarget.duration)}
                />
            )}
        </div>
    )
}

export default GeneratePodcast