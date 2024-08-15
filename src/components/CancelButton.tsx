type CancelButtonProps = {
  onCancel: () => void;
};

export default function CancelButton({ onCancel }: CancelButtonProps) {
  console.log("CancelButton rendered");
  return <button onClick={onCancel}>Avboka</button>;
}
