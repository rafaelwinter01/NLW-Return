import { CloseButton } from "../CloseButton";
import { Bug, Lightbulb, Question } from 'phosphor-react'
import { useState } from 'react'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

const iconSizes = {
    small: 24,
    medium: 36,
    large: 48
}

export const feedbackTypes = {
    BUG: {
      title: 'Problema',
      image: {
          source: <Bug size={iconSizes.large} color="lime" weight="fill" />,
          icon: <Bug size={iconSizes.small}  color="lime" weight="fill" />,
          text: 'Imagem de um inseto'
      }  
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: <Lightbulb size={iconSizes.large} color="yellow" weight="fill" />,
            icon: <Lightbulb size={iconSizes.small}  color="yellow" weight="fill" />,
            text: 'Imagem de uma lâmpada'
        }  
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: <Question size={iconSizes.large} color="cyan" weight="fill"  />,
            icon: <Question size={iconSizes.small}  color="cyan" weight="fill" />,
            text: 'Imagem de uma interrogação'
        }  
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ):(
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={()=>setFeedbackSent(true)}
                        />
                    )
                    }
                </>
            )
            }
            <footer>
                Feito por Rafael Winter
            </footer>
        </div>
    )
}