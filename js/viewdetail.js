
import list from "./list.json" assert { type: 'json' };





document.addEventListener('DOMContentLoaded', () => {


    const url = new URL(window.location.href);

    // Lấy tham số 'value' từ URL
    const value = url.searchParams.get('value');

    // Lấy thẻ car-details
    const carDetails = document.getElementById('car-details');

    // Tạo nội dung từ phần tử đầu tiên của mảng
    if (list.length) {
        const firstCar = list[value];
        const content = `
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img class="img-fluid" src="${firstCar.imageUrl}" alt="Image of ${firstCar.Name}">
                <!-- Button group below the image -->
                <div class="mt-3"> <!-- mt-3 adds a margin-top for spacing -->
                    <button type="button" class="btn btn-primary me-2">Add</button> <!-- Primary styled button for 'Add' -->
                    <button type="button" class="btn btn-success">Buy</button> <!-- Success styled button for 'Buy' -->
                </div>
            </div>
            <div class="col-md-6">
                <h1>${firstCar.Name}</h1>
                <div class="text-content">
                <p><strong>Name:</strong> ${firstCar.Name}</p>
                    <p><strong>Price:</strong> ${firstCar.Price}</p>
                    <p><strong>Color:</strong> ${firstCar.Color}</p>
                    <p><strong>Engine:</strong> ${firstCar.Engine} | <strong>Horsepower:</strong> ${firstCar.Horsepower}</p>
                    <p><strong>Acceleration 0-60 mph:</strong> ${firstCar.Acceleration}</p>
                    <p><strong>Top Speed:</strong> ${firstCar.TopSpeed}</p>
                    <p>${firstCar.Description}</p>
                </div>
            </div>
        </div>
    </div>
    `;


        // Thêm nội dung này vào thẻ car-details
        carDetails.innerHTML = content;
    }
});