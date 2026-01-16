import React from "react";

import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    // @ts-expect-error - Material Tailwind v2.x has overly strict types
    <Card color="transparent" shadow={false} placeholder="">
      {/* @ts-expect-error - Material Tailwind v2.x has overly strict types */}
      <CardBody className="grid px-0" placeholder="">
        {/* @ts-expect-error - Material Tailwind v2.x has overly strict types */}
        <Typography variant="h2" color="blue-gray" className="mb-2" placeholder="">
          {title}
        </Typography>
        {/* @ts-expect-error - Material Tailwind v2.x has overly strict types */}
        <Typography className=" font-normal" placeholder="">{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;