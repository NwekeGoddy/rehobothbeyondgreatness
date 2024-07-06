
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between h-[500px]">
      <div className="w-full h-full">
        <div className="relative" style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfNiEzXad2GNH78AczUqPnpYct-NjI5oXxYOW8Ac3JoX438rA/viewform?embedded=true"
            className="absolute top-0 left-0 w-full min-h-screen"
            style={{ border: 0 }}
            allowFullScreen
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
