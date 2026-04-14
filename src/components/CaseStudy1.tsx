import { House } from "lucide-react";

function CaseStudy1() {
  return (
    <section
      id="caseStudy1"
      aria-label="caseStudy1"
      className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-[75px] lg:px-[150px] gap-[40px] scroll-mt-[90px] leading-relaxed"
    >
      <div className="space-y-6">
        <div className="">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#11182c]/8 text-[#11182c]">
              <House className="size-6" />
            </div>
            <p className="text-[40px] leading-none font-semibold">
              Harrison Hall
            </p>
          </div>
          <p className="text-[18px]">
            {/* TODO update the about section */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            diam sem. Suspendisse sit amet tincidunt ex, eget bibendum odio. Sed
            faucibus tortor eu mi luctus, ut dapibus felis iaculis. Etiam
            sollicitudin libero sed velit finibus euismod. Cras euismod bibendum
            sapien. Cras eleifend elit ut lectus ultricies gravida. Etiam a
            velit in nibh lacinia facilisis. Praesent nibh odio, fringilla ac
            cursus ac, sollicitudin ut turpis. Nunc sit amet nibh sagittis,
            pharetra quam et, lacinia metus. Mauris volutpat semper augue. In ac
            mauris eu orci sagittis faucibus. Fusce nisi magna, mollis vel diam
            ac, efficitur iaculis nibh. Sed eget volutpat turpis, at viverra
            metus. Aliquam nec ipsum pharetra, hendrerit leo a, venenatis
            libero. Fusce mollis cursus tincidunt. Mauris tincidunt turpis eu
            enim sollicitudin, non sagittis justo fermentum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy1;
