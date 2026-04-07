import React from "react";

const AdminDetails = () => {
  return (
    <div>
      <div>
        <h2 className="font-medium">Professional Bio :</h2>
        <p className="text-sm text-gray-500 mt-2">
          Al Mamon is a highly experienced professional with a strong background
          in leadership and management. He has successfully led various projects
          and initiatives, demonstrating his ability to drive results and
          deliver value to his organization.
        </p>
      </div>

      <div className="mt-4">
        <h2 className="font-medium">Person Info :</h2>

        <div className="flex flex-col gap-3 mt-4 text-sm">
            <p><span>Name :</span> <span className="text-gray-500">Al Mamon</span></p>
            <p><span>Email :</span> <span className="text-gray-500">almamon@example.com</span></p>
            <p><span>Phone :</span> <span className="text-gray-500">+880 1234 567890</span></p>
            <p><span>Designation :</span> <span className="text-gray-500">Chief Executive Officer (C.E.O)</span></p>
            <p><span>Age :</span> <span className="text-gray-500">45</span></p>
            
        </div>
      </div>


      <div className="mt-8">
        <h2 className="font-medium">Contact Information :</h2>

        <div className="flex flex-col gap-3 mt-4 text-sm">
            <p><span>Email :</span> <span className="text-gray-500">almamon@example.com</span></p>
            <p><span>Phone :</span> <span className="text-gray-500">+880 1234 567890</span></p>
            <p><span>Address :</span> <span className="text-gray-500">Mirpur-1, 8 No Road, Dhaka, Bangladesh</span></p>
          
            
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
