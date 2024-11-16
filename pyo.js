let stlFile;
const YOUR_BACKEND_SLICER_API_URL = "https://api.bambulab.com/v1/slice";

document.getElementById('fileInput').addEventListener('change', (event) => {
    stlFile = event.target.files[0];
    document.getElementById('fileName').textContent = stlFile ? `Selected file: ${stlFile.name}` : "No file chosen";
});

async function uploadAndSliceSTL() {
    if (!stlFile) return alert("Please upload an STL file.");
    
    // Create FormData and prepare to simulate slicing process
    const formData = new FormData();
    formData.append("file", stlFile);

    try {
        // Here you would send the file to a backend slicer for processing (for this example, we simulate slicing)
        const sliceResponse = await fetch("/your_backend_slicer_api_url", { method: "POST", body: formData });
        if (!sliceResponse.ok) throw new Error("Failed to slice STL.");

        const gcodeData = await sliceResponse.arrayBuffer();
        const geometry = parseSTL(gcodeData);
        
        if (geometry) {
            // Calculate volume of the 3D model (in cubic mm)
            const volume = calculateVolume(geometry);
            document.getElementById("volume").textContent = `Volume: ${volume.toFixed(2)} mm³`;

            // Estimate the cost based on volume
            const estimatedCost = estimateCost(volume);
            document.getElementById("cost").textContent = `Estimated Cost: $${estimatedCost.toFixed(2)}`;
        } else {
            alert("Failed to parse STL for slicing.");
        }

    } catch (error) {
        console.error(error);
        alert("An error occurred. Check console for details.");
    }
}

function parseSTL(arrayBuffer) {
    try {
        const geometry = new THREE.STLLoader().parse(arrayBuffer);
        return geometry;
    } catch (error) {
        console.error('Error parsing STL file', error);
        return null;
    }
}

function calculateVolume(geometry) {
    let volume = 0;
    const faces = geometry.faces;
    const vertices = geometry.vertices;

    for (let i = 0; i < faces.length; i++) {
        const face = faces[i];
        const v0 = vertices[face.a];
        const v1 = vertices[face.b];
        const v2 = vertices[face.c];

        // Calculate the volume of the tetrahedron (v0, v1, v2, origin)
        const crossProduct = new THREE.Vector3().subVectors(v1, v0).cross(new THREE.Vector3().subVectors(v2, v0));
        const volumeOfTetrahedron = v0.dot(crossProduct) / 6;
        volume += Math.abs(volumeOfTetrahedron);
    }

    return volume;
}

function estimateCost(volume) {
    // Example cost model: $0.10 per cubic millimeter
    const costPerCubicMM = 0.10;
    return (volume * costPerCubicMM) / 1000;  // Convert to cubic cm for a more reasonable cost
}

      document.getElementById("menu-button").addEventListener("click", () => {
        document.querySelector(".overlay").classList.toggle("overlay--active");
      });
      document.getElementById("close-button").addEventListener("click", () => {
        document.querySelector(".overlay").classList.toggle("overlay--active");
      });