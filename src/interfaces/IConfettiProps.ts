export interface IConfettiProps {
    size: {
        width: number,
        height: number
    }
    showConfetti: boolean
    setShowConfetti: (arg: boolean) => void
}