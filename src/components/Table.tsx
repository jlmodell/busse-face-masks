const Table = ({ tickets }) => {
  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Who
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    What
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Progress
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Assigned
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, index) => {
                  return <TableRow ticket={ticket} index={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ ticket, index }) => {
  const { submittedBy, contactInfo, description, completed, assignedTo } =
    ticket;
  return (
    <tr class={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td class="px-6 py-4 whitespace-wrap text-sm font-medium text-gray-900">
        {submittedBy} {"<"}
        {contactInfo}
        {">"}
      </td>
      <td class="px-6 py-4 whitespace-wrap text-sm text-gray-500">
        {description}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {completed ? "completed" : "in-progress"}{" "}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {!!assignedTo ? assignedTo : "not assigned"}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default Table;
