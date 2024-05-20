import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import StarBackground from "./StarBackground";
import Image from "next/image";
import background from "./integration-background.jpg"
import { FaDigitalOcean, FaCloudflare, FaNpm, FaGithub, FaFigma, FaFly } from "react-icons/fa6"

import StylizedLogoMark from "./StylizedLogoMark"
import React from "react";
import clsx from "clsx";
import AnimatedContent from "./AnimatedContent";
import { useGSAP } from "@gsap/react";

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  const icons = {
    digitalocean: <FaDigitalOcean />,
    cloudflare: <FaCloudflare />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    fly: <FaFly />,
  }

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image src={background} alt="" fill className="object-cover" quality={90} />
      <StarBackground />
      <div className="relative">
        <div className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicRichText field={slice.primary.heading} />
        </div>
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
        <AnimatedContent slice={slice} />
      </div>
    </Bounded>
  );
};

export default Integrations;
