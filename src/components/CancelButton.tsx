type CancelButtonProps = {
  onCancel: () => void;
};

export default function CancelButton({ onCancel }: CancelButtonProps) {
  return <button onClick={onCancel}>Avboka</button>;
}
