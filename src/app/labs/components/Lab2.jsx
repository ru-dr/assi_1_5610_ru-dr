"use client";

import Link from "next/link";
import Image from "next/image";
import { Rocket, Atom, Laptop, Palette, Smartphone, Globe } from "lucide-react";

export default function Lab2() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      <div className="mb-6">
        <Link
          href="/labs"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Labs
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">
        Lab 2 - CSS Styling Fundamentals with Tailwind
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">ID Selectors</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">White on red paragraph</h3>
          <p id="white-on-red" className="bg-red-500 text-white p-2">
            This is a paragraph with white text on a red background using ID
            selector.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Black on yellow paragraph
          </h3>
          <p id="black-on-yellow" className="bg-yellow-400 text-black p-2">
            This is a paragraph with black text on a yellow background using ID
            selector.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Class Selectors</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Blue on yellow paragraph</h3>
          <p className="blue-on-yellow bg-yellow-400 text-blue-600 p-2">
            This is a paragraph with blue text on a yellow background using
            class selector.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Blue on yellow heading</h3>
          <h3 className="blue-on-yellow-heading bg-yellow-400 text-blue-600 p-2">
            This is a heading with blue text on a yellow background using class
            selector.
          </h3>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Document Structure</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">White on red DIV</h3>
          <div className="bg-red-500 text-white p-4">
            This is a DIV with white text on a red background.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Blue on yellow small span within the DIV
          </h3>
          <div className="bg-red-500 text-white p-4">
            This is a DIV with white text on red background, and here is a{" "}
            <span className="bg-yellow-400 text-blue-600 px-1">small span</span>{" "}
            with blue text on yellow background inside it.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Foreground Color</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Blue on white heading</h3>
          <h3 className="text-blue-600 bg-white p-2">
            This is a heading with blue text on white background.
          </h3>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Red on white text</h3>
          <p className="text-red-600 bg-white p-2">
            This is text with red color on white background.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Green on white text</h3>
          <p className="text-green-600 bg-white p-2">
            This is text with green color on white background.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Background Color</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">White on blue heading</h3>
          <h3 className="bg-blue-500 text-white p-2">
            This is a heading with white text on blue background.
          </h3>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Black on red paragraph</h3>
          <p className="bg-red-500 text-black p-2">
            This is a paragraph with black text on red background.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">White on green span</h3>
          <span className="bg-green-500 text-white px-2 py-1">
            This is a span with white text on green background.
          </span>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Borders</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Fat red border</h3>
          <div className="border-8 border-red-500 p-4">
            This DIV has a fat red border.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Thin blue dashed border</h3>
          <div className="border-2 border-dashed border-blue-500 p-4">
            This DIV has a thin blue dashed border.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Margins</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Fat red border with yellow background and big padding above and left
          </h3>
          <div className="border-8 border-red-500 bg-yellow-400 pt-8 pl-8 p-4">
            This DIV has fat red border, yellow background, big padding above
            and left.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Fat blue border with yellow background and big padding at bottom
          </h3>
          <div className="border-8 border-blue-500 bg-yellow-400 pb-8 p-4">
            This DIV has fat blue border, yellow background, big padding at
            bottom.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Fat yellow border with blue background and big padding all around
          </h3>
          <div className="border-8 border-yellow-400 bg-blue-500 p-8">
            This DIV has fat yellow border, blue background, big padding all
            around.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Fat red border with yellow background and margin at bottom
          </h3>
          <div className="border-8 border-red-500 bg-yellow-400 p-4 mb-8">
            This DIV has fat red border, yellow background, margin at bottom.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Fat blue border with yellow background and centered because margins
            on both sides
          </h3>
          <div className="border-8 border-blue-500 bg-yellow-400 p-4 mx-auto max-w-xs">
            This DIV has fat blue border, yellow background, centered with
            margins on both sides.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Fat yellow border with blue background and big margins all around
          </h3>
          <div className="border-8 border-yellow-400 bg-blue-500 p-4 m-8">
            This DIV has fat yellow border, blue background, big margins all
            around.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Corners</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Div with rounded corners at top left and right
          </h3>
          <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-4 rounded-t-lg">
            This DIV has rounded corners at top left and right.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Div with rounded corners at bottom left and right
          </h3>
          <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-4 rounded-b-lg">
            This DIV has rounded corners at bottom left and right.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Div with all rounded corners
          </h3>
          <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-4 rounded-lg">
            This DIV has all rounded corners.
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Div with rounded corners all around except top right
          </h3>
          <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-4 rounded-l-lg rounded-b-lg rounded-tr-none">
            This DIV has rounded corners all around except top right.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dimensions</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Yellow DIV taller than it's longer
          </h3>
          <div className="bg-yellow-400 text-black w-32 h-48 p-2">
            Yellow DIV taller than longer
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Blue DIV longer than it's taller
          </h3>
          <div className="bg-blue-500 text-white w-48 h-32 p-2">
            Blue DIV longer than taller
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Red DIV height same as width
          </h3>
          <div className="bg-red-500 text-white w-32 h-32 p-2">
            Red DIV square
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Relative Position</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Yellow DIV with text nudged down and right
          </h3>
          <div className="bg-yellow-400 text-black p-4 relative">
            <span className="relative top-2 left-2">
              Text nudged down and right
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Blue DIV moved up and right a bit
          </h3>
          <div className="bg-blue-500 text-white p-4 relative -top-2 left-2">
            Blue DIV moved up and right a bit
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Absolute Position</h2>

        <div className="relative h-64 bg-gray-100 dark:bg-gray-800 mb-4">
          <h3 className="text-xl font-medium mb-2">
            Portrait, Landscape, and Square rectangles styled as shown
          </h3>
          <div className="absolute top-4 left-4 w-16 h-24 bg-red-500"></div>
          <div className="absolute top-4 left-24 w-24 h-16 bg-green-500"></div>
          <div className="absolute top-4 left-52 w-16 h-16 bg-blue-500"></div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Fixed Position</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Blue Fixed position rectangle doesn't scroll with rest of page
          </h3>
          <div className="fixed top-20 right-4 w-32 h-32 bg-blue-500 text-white z-10">
            Fixed Blue Rectangle
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Z Index</h2>

        <div className="relative h-48 mb-4">
          <h3 className="text-xl font-medium mb-2">
            Blue Landscape rectangle renders above other two
          </h3>
          <div className="absolute top-8 left-8 w-32 h-16 bg-red-500"></div>
          <div className="absolute top-12 left-12 w-32 h-16 bg-green-500"></div>
          <div className="absolute top-16 left-16 w-32 h-16 bg-blue-500 z-10"></div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Floating Images</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Three images laid out horizontally
          </h3>
          <div className="flex space-x-4">
            <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" alt="Mountain landscape" width={128} height={128} className="object-cover rounded" />
            <Image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop" alt="Forest scene" width={128} height={128} className="object-cover rounded" />
            <Image src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=200&fit=crop" alt="Ocean view" width={128} height={128} className="object-cover rounded" />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Image on the right</h3>
          <div className="flex">
            <p className="flex-1">
              This text flows around the image on the right. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&h=200&fit=crop" alt="Cat portrait" width={128} height={128} className="object-cover rounded ml-4" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Grid Layout</h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-red-500 p-4">1</div>
          <div className="bg-green-500 p-4">2</div>
          <div className="bg-blue-500 p-4">3</div>
          <div className="bg-yellow-500 p-4">4</div>
          <div className="bg-purple-500 p-4">5</div>
          <div className="bg-pink-500 p-4">6</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Flex</h2>

        <div className="flex space-x-4 mb-4">
          <div className="bg-red-500 p-4">Column 1</div>
          <div className="bg-green-500 p-4">Column 2</div>
          <div className="bg-blue-500 p-4">Column 3</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">React Icons Sample</h2>

        <div className="flex space-x-4 items-center">
          <Rocket className="w-10 h-10 text-blue-500" />
          <Atom className="w-10 h-10 text-purple-500" />
          <Laptop className="w-10 h-10 text-green-500" />
          <Palette className="w-10 h-10 text-pink-500" />
          <Smartphone className="w-10 h-10 text-orange-500" />
          <Globe className="w-10 h-10 text-cyan-500" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Containers</h2>

        <div className="container mx-auto bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
          <p>
            Thin padding all around Lab 2 - This is a container with auto
            margins and padding.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Grids</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-200 dark:bg-blue-800 text-gray-900 dark:text-gray-100 p-4">
            Left half
          </div>
          <div className="bg-green-200 dark:bg-green-800 text-gray-900 dark:text-gray-100 p-4">
            Right half
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-red-200 dark:bg-red-800 text-gray-900 dark:text-gray-100 p-4">
            One third
          </div>
          <div className="bg-yellow-200 dark:bg-yellow-700 text-gray-900 dark:text-gray-100 p-4 col-span-2">
            Two thirds
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-purple-200 dark:bg-purple-800 text-gray-900 dark:text-gray-100 p-4 col-span-3">
            Main content
          </div>
          <div className="bg-pink-200 dark:bg-pink-800 text-gray-900 dark:text-gray-100 p-4">
            Side
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-red-200 dark:bg-red-800 text-gray-900 dark:text-gray-100 p-4">
            A
          </div>
          <div className="bg-green-200 dark:bg-green-800 text-gray-900 dark:text-gray-100 p-4">
            B
          </div>
          <div className="bg-blue-200 dark:bg-blue-800 text-gray-900 dark:text-gray-100 p-4">
            C
          </div>
          <div className="bg-yellow-200 dark:bg-yellow-700 text-gray-900 dark:text-gray-100 p-4">
            D
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-4">
          <div className="bg-purple-200 dark:bg-purple-800 text-gray-900 dark:text-gray-100 p-4">
            1
          </div>
          <div className="bg-pink-200 dark:bg-pink-800 text-gray-900 dark:text-gray-100 p-4">
            2
          </div>
          <div className="bg-indigo-200 dark:bg-indigo-800 text-gray-900 dark:text-gray-100 p-4">
            3
          </div>
          <div className="bg-teal-200 dark:bg-teal-800 text-gray-900 dark:text-gray-100 p-4">
            4
          </div>
          <div className="bg-orange-200 dark:bg-orange-800 text-gray-900 dark:text-gray-100 p-4">
            5
          </div>
          <div className="bg-cyan-200 dark:bg-cyan-800 text-gray-900 dark:text-gray-100 p-4">
            6
          </div>
          <div className="bg-lime-200 dark:bg-lime-800 text-gray-900 dark:text-gray-100 p-4">
            7
          </div>
          <div className="bg-emerald-200 dark:bg-emerald-800 text-gray-900 dark:text-gray-100 p-4">
            8
          </div>
          <div className="bg-violet-200 dark:bg-violet-800 text-gray-900 dark:text-gray-100 p-4">
            9
          </div>
          <div className="bg-rose-200 dark:bg-rose-800 text-gray-900 dark:text-gray-100 p-4">
            10
          </div>
          <div className="bg-amber-200 dark:bg-amber-800 text-gray-900 dark:text-gray-100 p-4">
            11
          </div>
          <div className="bg-sky-200 dark:bg-sky-800 text-gray-900 dark:text-gray-100 p-4">
            12
          </div>
        </div>

        
        <div className="fixed bottom-4 right-4 bg-black text-white p-3 text-xs font-mono rounded shadow-lg z-50">
          <div className="font-semibold mb-1">Current Breakpoint:</div>
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden">XS (&lt; 640px)</div>
          <div className="hidden sm:block md:hidden">SM (≥ 640px)</div>
          <div className="hidden md:block lg:hidden">MD (≥ 768px)</div>
          <div className="hidden lg:block xl:hidden">LG (≥ 1024px)</div>
          <div className="hidden xl:block 2xl:hidden">XL (≥ 1280px)</div>
          <div className="hidden 2xl:block">2XL (≥ 1536px)</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tables</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  Quiz
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  Title
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  Points
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  Q1
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  HTML Basics
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  10
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  2024-01-15
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  Q2
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  CSS Fundamentals
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  15
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  2024-01-22
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Lists</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Favorite list of movies</h3>
          <ul className="border border-gray-300 dark:border-gray-600 rounded-lg divide-y divide-gray-300 dark:divide-gray-600">
            <li className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">The Shawshank Redemption</li>
            <li className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">The Godfather</li>
            <li className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">The Dark Knight</li>
            <li className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Pulp Fiction</li>
            <li className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Forrest Gump</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">
            Favorite list of links to books
          </h3>
          <ul className="border border-gray-300 dark:border-gray-600 rounded-lg divide-y divide-gray-300 dark:divide-gray-600">
            <li className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <a href="#" className="block px-4 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                To Kill a Mockingbird
              </a>
            </li>
            <li className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <a href="#" className="block px-4 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                1984
              </a>
            </li>
            <li className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <a href="#" className="block px-4 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                The Great Gatsby
              </a>
            </li>
            <li className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <a href="#" className="block px-4 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                Pride and Prejudice
              </a>
            </li>
            <li className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <a href="#" className="block px-4 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                The Catcher in the Rye
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Forms</h2>

        <form className="space-y-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Dropdown</h3>
          <select className="p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Switches</h3>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Option 1</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Option 2</span>
          </label>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Sliders</h3>
          <input type="range" className="w-full" />
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Addons</h3>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l">
              @
            </span>
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-r"
              placeholder="Username"
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Responsive form</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
              />
            </div>
          </form>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>

        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            <a
              href="#"
              className="border-b-2 border-blue-500 dark:border-blue-400 py-2 px-1 text-blue-600 dark:text-blue-400"
            >
              Tab 1
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent py-2 px-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Tab 2
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent py-2 px-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Tab 3
            </a>
          </nav>
        </div>
        <div className="py-4">
          <p>Content for Tab 1</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pills</h2>

        <div className="flex space-x-2 mb-4">
          <a
            href="/labs/lab1"
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
          >
            Lab 1
          </a>
          <a
            href="/labs/lab2"
            className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm"
          >
            Lab 2
          </a>
          <a
            href="/kambaz"
            className="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
          >
            Kanbas
          </a>
        </div>

        <div className="mb-4">
          <a
            href="https://github.com"
            className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
          >
            Git Repository
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden max-w-sm">
          <Image 
            src="https://images.unsplash.com/photo-1700508317396-e343a69ac72f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnNoaXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" 
            alt="SpaceX Starship" 
            width={500} 
            height={300} 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Starship
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The Starship is SpaceX's next-generation launch vehicle.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
