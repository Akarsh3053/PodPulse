import { GeneratePodcastProps } from "@/types"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

const GeneratePodcast = ({
    setAudioStorageId,
    setAudio,
    voiceType,
    audio,
    voicePrompt,
    setVoicePrompt,
    setAudioDuration,
}: GeneratePodcastProps) => {
    return (
        <div>
            <div className="flex flex-col gap-2.5">
                <Label className="text-16 font-bold text-white-1">
                    AI prompt to generate Podcast
                </Label>
                <Textarea
                    rows={5}
                    value={voicePrompt}
                    placeholder="Provide text to generate audio"
                    onChange={(e) => setVoicePrompt(e.target.value)}
                    className="input-class font-light focus-visible:ring-offset-orange-1"
                />
            </div>
        </div>
    )
}

export default GeneratePodcast