// import { createSignal, Show } from "solid-js";
// import { user } from "../store";

export default function Home() {
  // const [identifier, setIdentifier] = createSignal("");
  // const [password, setPassword] = createSignal("");

  return (
    <>
      <section id="main" class="bg-white text-blue-800 h-screen w-screen">
        <div class="flex flex-col h-full w-full">
          <div class="h-1/3 bg-blue-300"></div>
          <div class="absolute top-[25%] w-full">
            <div class="bg-white w-1/2">
              <div class="grid grid-cols-5 py-2 pr-2">
                <div class="col-span-1 bg-blue-800 text-white font-bold text-2xl flex justify-end items-center pr-2 py-2">
                  NEW!
                </div>
                <div class="col-span-4 flex justify-start items-center py-2 pl-2 border-2 border-blue-800 bg-gradient-to-r from-blue-200 to-white font-bold text-xl">
                  <span class="font-normal italic">SoftWear</span>
                  <span class="font-normal text-xl relative -top-1">
                    &trade;
                  </span>{" "}
                  MEDICAL PROCEDURAL MASKS
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full py-10 px-10 space-y-4">
            <div class="py-3 px-8 text-3xl font-bold">
              Your Toughest Ally is{" "}
              <span class="font-normal italic">SoftWear</span>
              <span class="font-normal text-xl relative -top-1">&trade;</span>
            </div>
            <div class="flex flex-col w-full">
              <div class="px-8 text-2xl font-semibold tracking-tighter">
                Designed for the front lines.
              </div>
              <div class="pt-1 px-8 text-xl tracking-tight leading-none">
                Introducing our latest disposable, high-performance medical
                procedural mask designed for today's standards: fluid
                resistance, high-filtration, easy-breathing and{" "}
                <span class="italic">comfort</span>.
              </div>
            </div>
            <div class="flex flex-col pt-2">
              <div class="px-8 text-lg font-bold tracking-tight">
                The <span class="font-normal italic">SoftWear</span>
                <span class="font-normal text-xl relative -top-1">
                  &trade;
                </span>{" "}
                mask design difference:
              </div>
              <div class="px-8 pt-1">
                <ul class="text-lg list-disc list-inside font-semibold leading-none">
                  <li>Ultra-soft inner layer</li>
                  <li>Form-fitting nose piece</li>
                  <li>Comfortable ear loops</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="px-16 pt-3">
            <div class="text-3xl font-bold tracking-wide">
              Breath easy ... it's Busse.
            </div>
            <div class="flex flex-col tracking-tight text-xl leading-none mt-2">
              As a trusted brand in disposable medical devices for over 50
              years, Busse is a proven industry leader offering precision
              manufacturing with strict adherence to the latest industry
              standards and guidelines.
            </div>
          </div>
          <div class="flex-1"></div>
          <div class="px-8 pt-4 mb-10">
            <div class="grid grid-cols-1 md:grid-cols-2 p-10">
              <div class="flex flex-col">
                <div class="flex flex-col">
                  <div class="text-xl font-bold tracking-tight">
                    The Busse brand difference:
                  </div>
                  <ul class="text-lg list-disc list-inside font-semibold leading-none">
                    <li>High Quality Standards</li>
                    <li>FDA Registered</li>
                    <li>ISO Certified</li>
                  </ul>
                  <div class="flex flex-col pt-5">
                    <div class="text-4xl font-semibold">busse</div>
                    <div class="italic font-light text-pink-300">
                      A Woman Owned Company
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="bg-blue-300 w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="info">
        <div class="flex flex-col w-screen h-screen flex-grow">
          <div class="w-full bg-blue-300 h-1/5"></div>
          <div class="w-1/2 py-6 mx-auto">
            <div class="grid grid-cols-5 font-semibold border border-1 border-gray-400 gap-y-1">
              <div class="flex flex-col justify-center items-center col-span-2 bg-blue-800 text-white px-2 py-3 text-center">
                Cat. No. 371
              </div>
              <div class="col-span-3 bg-gradient-to-r from-blue-200 to-white text-blue-800 px-2 py-3">
                500 / case, 10 dispensers of 50 each, Blue
              </div>
              <div class="flex flex-col justify-center items-center col-span-2 bg-blue-800 text-white px-2 py-3 text-center">
                Cat. No. 373
              </div>
              <div class="col-span-3 bg-gradient-to-r from-blue-200 to-white text-blue-800 px-2 py-3">
                100 / case, 4 dispensers of 25 each, with Face Shield, Blue
              </div>
              <div class="flex flex-col justify-center items-center col-span-2 bg-blue-800 text-white px-2 py-3 text-center">
                Cat. No. 376
              </div>
              <div class="col-span-3 bg-gradient-to-r from-blue-200 to-white text-blue-800 px-2 py-3">
                200 / case, 4 dispensers of 50 each, individually packaged, Blue
              </div>
              <div class="flex flex-col justify-center items-center col-span-2 bg-blue-800 text-white px-2 py-3 text-center">
                Cat. No. 377
              </div>
              <div class="col-span-3 bg-gradient-to-r from-blue-200 to-white text-blue-800 px-2 py-3">
                200 / case, 20 packages of 10 each, Blue
              </div>
              <div class="flex flex-col justify-center items-center col-span-2 bg-blue-800 text-white px-2 py-3 text-center">
                Cat. No. 378
              </div>
              <div class="col-span-3 bg-gradient-to-r from-blue-200 to-white text-blue-800 px-2 py-3 flex">
                <div>
                  200 / case, 4 dispensers of 50 each, individually packaged, MR
                  Safe, Blue
                </div>
                <div class="m-auto w-1/5 font-bold border-2 border-green-400 px-0 p-2 text-center text-green-400">
                  MR
                </div>
              </div>
            </div>
          </div>
          <div class="pt-10 w-3/4 mx-auto text-blue-800">
            <ul class="list-disc list-inside font-semibold text-xl tracking-tight leading-snug">
              <li>ASTM Level 2</li>
              <li>
                Ideal for procedures involving low to moderate exposure to
                fluids, sprays and/or aerosols.
              </li>
              <li>
                Masks are single use and should be discarded after each use.
              </li>
            </ul>
          </div>
          <div class="flex flex-col mx-auto text-blue-800 my-10 space-y-1 text-center">
            <div class="text-2xl font-bold">Attention All Civilians</div>
            <div class="tracking-tight leading-none text-lg w-2/3 mx-auto pt-2 pb-1">
              Busse’s <span class="font-normal italic">SoftWear</span>
              <span class="font-normal text-xl relative -top-1">
                &trade;
              </span>{" "}
              masks are also available for the general public in our retail
              packages under catalog numbers 376 and 377 respectively.
            </div>
            <div class="font-semibold text-xl tracking-tight">
              Wear what the medical professionals wear!
            </div>
          </div>
          <div class="flex-1"></div>
          <div class="my-10 text-blue-800" id="footer">
            <div class="flex flex-col">
              <div class="w-1/3 text-center mx-auto flex justify-center items-center">
                <div class="w-24 h-16 bg-blue-300"></div>
                <div class="p-1 text-lg">
                  To find your local sales representative, please visit:{" "}
                  <span class="font-semibold">
                    <a href="https://busseinc.com" target="_blank">
                      www.busseinc.com
                    </a>
                  </span>
                </div>
              </div>
              <div class="grid grid-cols-3 mt-16">
                <div class="flex flex-col justify-center items-center space-y-1">
                  <div class="rounded-full w-16 h-16 border border-1 border-blue-800 bg-blue-300"></div>
                  <div class="text-sm tracking-tight font-bold">
                    Proudly Made in the USA
                  </div>
                  <div class="pt-10 text-xs font-light">BB370 ETAL REV A</div>
                </div>

                <div class="flex flex-col text-center">
                  <div class="text-4xl font-semibold">busse</div>
                  <div class="text-md italic font-light text-pink-300">
                    A Woman Owned Company
                  </div>
                  <div class="flex flex-col tracking-tight leading-none my-3 font-semibold">
                    <div>Busse Hospital Disposables</div>
                    <div>75 Arkay Drive, Hauppauge, NY 11788</div>
                    <div>800-645-6526</div>
                  </div>
                  <div class="text-sm">
                    &copy; 2021 Busse Hospital Disposables
                  </div>
                </div>

                <div class="flex flex-col justify-center items-center">
                  <div class="flex">
                    <div class="w-10 h-10 rounded-full bg-blue-300"></div>

                    <div class="flex flex-col justify-center items-center space-y-1">
                      <div class="font-mono w-10 h-10 flex justify-center items-center rounded-full border-2 border-blue-800 text-3xl font-bold">
                        2
                        <span class="absolute w-10 h-[2.25px] bg-blue-800 rotate-45"></span>
                      </div>
                      <div class="text-xs">Single Use</div>
                    </div>
                  </div>
                  <div class="w-1/2 rounded-lg flex flex-col text-xs justify-center items-center mt-4 border border-1 border-green-400 font-semibold">
                    <div class="bg-green-400 text-white w-full text-center rounded-t-lg">
                      Not Made With
                    </div>
                    <div class="text-green-400">Natural Rubber Latex</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
