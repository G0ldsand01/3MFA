let stlFile;
  const printers = {
    bambuA1: { name: "Bambu Lab A1", brand: "bambu", ip: "YOUR_BAMBU_A1_IP", apiToken: "YOUR_BAMBU_A1_API_TOKEN" },
    bambuA1Mini: { name: "Bambu Lab A1 Mini", brand: "bambu", ip: "YOUR_BAMBU_A1_MINI_IP", apiToken: "YOUR_BAMBU_A1_MINI_API_TOKEN" },
    bambuP1P: { name: "Bambu Lab P1P", brand: "bambu", ip: "YOUR_BAMBU_P1_PRO_IP", apiToken: "YOUR_BAMBU_P1_PRO_API_TOKEN" },
    ender3v2se: { name: "Ender 3 v2 SE", brand: "ender", ip: "YOUR_ENDER_3V2_SERIAL_IP", apiToken: "YOUR_ENDER_3V2_SERIAL_API_TOKEN" },
    ender3V2: { name: "Ender 3 v2", brand: "ender", ip: "YOUR_ENDER_3V2_IP", apiToken: "YOUR_ENDER_3V2_API_TOKEN" }
  };

  document.getElementById('fileInput').addEventListener('change', (event) => {
    stlFile = event.target.files[0];
    document.getElementById('fileName').textContent = stlFile ? `Selected file: ${stlFile.name}` : "No file chosen";
  });

  async function uploadAndSliceSTL() {
    if (!stlFile) return alert("Please upload an STL file.");

    const selectedPrinter = printers[document.getElementById('printerSelect').value];
    if (!selectedPrinter || !selectedPrinter.ip) return alert("Printer configuration is missing.");
  
    try {
      const formData = new FormData();
      formData.append("file", stlFile);

      const sliceResponse = await fetch("YOUR_BACKEND_SLICER_API_URL", { method: "POST", body: formData });
      if (!sliceResponse.ok) throw new Error("Failed to slice STL.");

      const gcodeData = await sliceResponse.arrayBuffer();
      const uploadResponse = await fetch(`http://${selectedPrinter.ip}/api/v1/print/gcode`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${selectedPrinter.apiToken}`, "Content-Type": "application/octet-stream" },
        body: gcodeData
      });
      if (!uploadResponse.ok) throw new Error("Failed to upload G-code.");

      alert("Print job started!");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Check console for details.");
    }
  
      // Get the file input and file name display elements
      const fileInput = document.getElementById('fileInput');
        const fileNameDisplay = document.getElementById('fileName');

        // Listen for changes to the file input
        fileInput.addEventListener('change', function() {
            const file = fileInput.files[0];  // Get the selected file
            if (file) {
                fileNameDisplay.textContent = `Selected file: ${file.name}`;  // Update file name display
            } else {
                fileNameDisplay.textContent = "No file chosen";  // Default message when no file is selected
            }
        });
  }
      document.getElementById("menu-button").addEventListener("click", () => {
        document.querySelector(".overlay").classList.toggle("overlay--active");
      });
      document.getElementById("close-button").addEventListener("click", () => {
        document.querySelector(".overlay").classList.toggle("overlay--active");
      });