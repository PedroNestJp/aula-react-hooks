export default function DogCard({ image }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt="Random dog"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
