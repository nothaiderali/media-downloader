export default function ({ item }) {
  return (
    <video
      style={{
        width: "300px",
        height: "300px",
        minWidth: "300px",
        minHeight: "300px",
        borderRadius: "6px",
        backgroundColor: "black",
      }}
      controls
      controlsList="nodownload"
      onPlay={({ target }) =>
        Array.from(document.querySelectorAll("audio,video")).forEach(
          (media) => media !== target && media.pause()
        )
      }
    >
      <source src={item.url} />
    </video>
  );
}
