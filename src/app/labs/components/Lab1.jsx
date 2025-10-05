import Image from "next/image";
import Link from "next/link";

export default function Lab1() {
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
        Lab 1 - HTML Elements Practice
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Heading Tags</h2>
        <h1>H1 Tag</h1>
        <h2>H2 Tag</h2>
        <h3>H3 Tag</h3>
        <h4>H4 Tag</h4>
        <h5>H5 Tag</h5>
        <h6>H6 Tag</h6>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paragraph Tag</h2>
        <p>
          This is a paragraph tag example. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          This is another paragraph to demonstrate multiple paragraph usage.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ordered List Elements</h2>
        <ol className="list-decimal ml-6">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
          <li>Fifth item</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Favorite Recipe</h2>
        <h3 className="text-xl font-medium mb-2">Chocolate Chip Cookies</h3>
        <ol className="list-decimal ml-6">
          <li>Preheat oven to 375°F (190°C)</li>
          <li>Mix butter and sugars until creamy</li>
          <li>Beat in eggs and vanilla extract</li>
          <li>Gradually blend in flour and salt</li>
          <li>Stir in chocolate chips</li>
          <li>Drop spoonfuls onto ungreased cookie sheets</li>
          <li>Bake for 9-11 minutes until golden brown</li>
          <li>Cool on baking sheet for 2 minutes</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Unordered List Elements</h2>
        <ul className="list-disc ml-6">
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
          <li>Grape</li>
          <li>Strawberry</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Favorite Books</h2>
        <ul className="list-disc ml-6">
          <li>The Great Gatsby</li>
          <li>To Kill a Mockingbird</li>
          <li>1984</li>
          <li>Pride and Prejudice</li>
          <li>The Catcher in the Rye</li>
          <li>Lord of the Flies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table Tags (Q3-Q10)</h2>
        <table className="border-collapse border border-gray-300 dark:border-gray-600 w-full">
          <thead>
            <tr className="bg-gray-100 dark:bg-[#171717]">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Question
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Date
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Q3
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                2025-01-15
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                85
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Q4
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                2025-01-22
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                92
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Q5
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                2025-01-29
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                78
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Q6
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                2025-02-05
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                88
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Q7
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                2025-02-12
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                95
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Q8
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                2025-02-19
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                82
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Q9
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                2025-02-26
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                90
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                Q10
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                2025-03-05
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">
                87
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Images</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Starship Image</h3>
          <Image
            src="https://images.unsplash.com/photo-1658150691365-cf67cb7fca7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V4JTIwc3RhcnNoaXB8ZW58MHx8MHx8fDA%3D"
            alt="Starship"
            width={400}
            height={200}
            className="border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Teslabot Image</h3>
          <Image
            src="https://images.unsplash.com/photo-1706231290723-b5f7940c29fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBib3R8ZW58MHx8MHx8fDA%3D"
            alt="Teslabot"
            width={400}
            height={200}
            className="border border-gray-300"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Forms</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Comments:
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            ></textarea>
          </div>

          <div>
            <fieldset>
              <legend className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Favorite Genre (Radio):
              </legend>
              <div className="space-y-2">
                <label className="text-gray-700 dark:text-gray-300">
                  <input
                    type="radio"
                    name="genre"
                    value="comedy"
                    className="mr-2"
                  />
                  Comedy
                </label>
                <br />
                <label className="text-gray-700 dark:text-gray-300">
                  <input
                    type="radio"
                    name="genre"
                    value="drama"
                    className="mr-2"
                  />
                  Drama
                </label>
                <br />
                <label className="text-gray-700 dark:text-gray-300">
                  <input
                    type="radio"
                    name="genre"
                    value="scifi"
                    className="mr-2"
                  />
                  SciFi
                </label>
                <br />
                <label className="text-gray-700 dark:text-gray-300">
                  <input
                    type="radio"
                    name="genre"
                    value="fantasy"
                    className="mr-2"
                  />
                  Fantasy
                </label>
              </div>
            </fieldset>
          </div>

          <div>
            <fieldset>
              <legend className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Favorite Genres (Checkbox):
              </legend>
              <div className="space-y-2">
                <label className="text-gray-700 dark:text-gray-300">
                  <input
                    type="checkbox"
                    name="genres"
                    value="comedy"
                    className="mr-2"
                  />
                  Comedy
                </label>
                <br />
                <label className="text-gray-700 dark:text-gray-300">
                  <input
                    type="checkbox"
                    name="genres"
                    value="drama"
                    className="mr-2"
                  />
                  Drama
                </label>
                <br />
                <label className="text-gray-700 dark:text-gray-300">
                  <input
                    type="checkbox"
                    name="genres"
                    value="scifi"
                    className="mr-2"
                  />
                  SciFi
                </label>
                <br />
                <label className="text-gray-700 dark:text-gray-300">
                  <input
                    type="checkbox"
                    name="genres"
                    value="fantasy"
                    className="mr-2"
                  />
                  Fantasy
                </label>
              </div>
            </fieldset>
          </div>

          <div>
            <label
              htmlFor="favoriteMovie"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Favorite Movie (Select One):
            </label>
            <select
              id="favoriteMovie"
              name="favoriteMovie"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            >
              <option value="">Choose a movie</option>
              <option value="inception">Inception</option>
              <option value="matrix">The Matrix</option>
              <option value="interstellar">Interstellar</option>
              <option value="avengers">Avengers</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="favoriteActors"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Favorite Actors (Select Many):
            </label>
            <select
              id="favoriteActors"
              name="favoriteActors"
              multiple
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded h-24 bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            >
              <option value="dicaprio">Leonardo DiCaprio</option>
              <option value="cruise">Tom Cruise</option>
              <option value="smith">Will Smith</option>
              <option value="downey">Robert Downey Jr.</option>
              <option value="johansson">Scarlett Johansson</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Salary:
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Rating (1-10):
            </label>
            <input
              type="range"
              id="rating"
              name="rating"
              min="1"
              max="10"
              className="w-full"
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>
        </form>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Anchor Tag</h2>
        <a
          href="https://www.northeastern.edu"
          className="text-blue-600 underline"
        >
          Link to Northeastern University
        </a>
        <Link href="/dashboard" className="text-blue-600 underline ml-4">
          Link to Kambaz
        </Link>
      </section>
    </div>
  );
}
