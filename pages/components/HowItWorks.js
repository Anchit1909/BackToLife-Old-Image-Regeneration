import React from "react";
import Image from "next/image";

function HowItWorks() {
  return (
    <section className="bg-white dark:bg-gray-900 flex flex-col items-center">
      <div className="mt-8">
        <h1 className="max-w-xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
          How the{" "}
          <span className="text-blue-600 dark:text-blue-500">model</span> works
        </h1>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Abstract Idea
            </h2>
            <p className="mb-4">
              We propose to restore old photos that suffer from severe
              degradation through a deep learning approach. we train two
              variational autoencoders (VAEs) to respectively transform old
              photos and clean photos into two latent spaces.
            </p>
            <p>
              Two branches are fused in the latent space, leading to improved
              capability to restore old photos from multiple defects.
            </p>
          </div>
          <div>
            <Image src="/f1.png" width="424" height="221" alt="me" />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div>
            <Image src="/f2.png" width="397" height="442" alt="me" />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Framework Overview
            </h2>
            <p className="mb-4">
              We first train two VAEs: VAE1 for images in real photos r ∈ R and
              synthetic images x, with their domain gap closed by jointly
              training an adversarial discriminator; VAE2 is trained for clean
              images y. With VAEs, images are transformed to compact latent
              space.
            </p>
            <p>
              (II.)Then, we learn the mapping that restores the corrupted images
              to clean ones in the latent space with partial non-local block.
              <span className="text-blue-600 dark:text-blue-500">
                <a href="https://arxiv.org/pdf/2009.07047v1.pdf">
                  {" "}
                  Paper(Journal Version)
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HowItWorks;
