import {
    Typography,
    Card,
    CardBody,
  } from "@material-tailwind/react";
  
  
  interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
  }
  
  export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
    return (
      // @ts-expect-error - Material Tailwind v2.x has overly strict types
      <Card color="transparent" shadow={false} placeholder="">
        {/* @ts-expect-error - Material Tailwind v2.x has overly strict types */}
        <CardBody className="grid justify-start" placeholder="">
          <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
            <Icon className="h-6 w-6" />
          </div>
          {/* @ts-expect-error - Material Tailwind v2.x has overly strict types */}
          <Typography variant="h5" color="blue-gray" className="mb-2" placeholder="">
            {title}
          </Typography>
          {/* @ts-expect-error - Material Tailwind v2.x has overly strict types */}
          <Typography className=" font-normal !text-gray-500" placeholder="">
            {children}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default FeatureCard;
  