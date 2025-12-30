import { Card } from "@/components/ui/card";

interface VideoSectionProps {
  title: string;
  description: string;
  videoPath: string;
  reversed?: boolean;
}

const LocalVideoSection = ({
  title,
  description,
  videoPath,
  reversed = false,
}: VideoSectionProps) => {
  const videoUrl = new URL(`/src/assets/${videoPath}`, import.meta.url).href;
  console.log(videoUrl);
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex-1 w-full">
            <Card className="overflow-hidden shadow-xl">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalVideoSection;
