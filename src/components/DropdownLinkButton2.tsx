export default function DropdownComponent() {
  return (
      <div className="relative w-20 lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>ReactJS </option>
              <option>Laravel </option>

          </select>
      </div>
  );
}
