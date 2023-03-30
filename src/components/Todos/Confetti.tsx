import ReactConfetti from 'react-confetti';
import { IConfettiProps } from '../../interfaces/IConfettiProps';

const Confetti = (props: IConfettiProps) => {
  const { size, showConfetti, setShowConfetti } = props;

  return (
    <>
      {showConfetti ? (
        <ReactConfetti
          width={size.width}
          height={size.height}
          numberOfPieces={200}
          recycle={false}
          onConfettiComplete={() => {
            setShowConfetti(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Confetti;
