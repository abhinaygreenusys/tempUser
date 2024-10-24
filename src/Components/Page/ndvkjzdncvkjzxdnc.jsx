.laundry-page {
  /* Existing styles */
}

.laundry {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.laundry-left {
  width: 50%;
}

.laundry-right {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.request-service-btn {
  /* Style your button */
}

.rectangle-box {
  text-align: center;
  margin-top: 20px;
}

.image-row {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.service-section {
  display: flex;
  padding: 20px;
}

.service-left, .service-right {
  width: 50%;
}

.service-details {
  display: flex;
  align-items: center;
}

.service-icon {
  margin-right: 10px;
}

.background-image-section {
  padding: 20px;
  color: white;
}

.centered-box {
  text-align: center;
}

.image-row {
  display: flex;
  justify-content: center;
}

.request-service-section {
  text-align: center;
  margin-top: 20px;
}

.request-box {
  display: inline-block;
  text-align: left;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  position: relative;
}

.close-modal-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.service-icon {
  font-size: 24px;
  margin-bottom: 10px;
}
