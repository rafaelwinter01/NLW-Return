import { Check } from 'phosphor-react'
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className="flex flex-col items-center py-10 w-[304px]">
                <Check size={48} color="green"/>
                <span className="text-xl mt-2">Feedback Enviado</span>
                <span>Obrigado!</span>
                <button
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                    onClick={onFeedbackRestartRequested}
                >
                    Enviar outro feedback
                </button>
            </div>
        </>
    )
}