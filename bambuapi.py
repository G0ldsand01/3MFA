import time
import bambulabs_api as bl

IP = '192.168.18.28'
SERIAL = '03919C432500173'
ACCESS_CODE = '39450224'
print('Starting bambulabs_api example')
print('Connecting to BambuLab 3D printer')
print(f'IP: {IP}')
print(f'Serial: {SERIAL}')
print(f'Access Code: {ACCESS_CODE}')


    # Create a new instance of the API
printer = bl.Printer(IP, ACCESS_CODE, SERIAL)


    # Connect to the BambuLab 3D printer
printer.connect()


time.sleep(2)

    # Get the printer status
status = printer.get_state()
print(f'Printer status: {status}')


    # Turn the light off
printer.turn_light_off()


time.sleep(2)

    # Turn the light on
printer.turn_light_on()


    # Disconnect from the Bambulabs 3D printer
printer.disconnect()
