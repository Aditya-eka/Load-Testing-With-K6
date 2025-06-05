#!/bin/sh

last_vus=0
increment=100

while true; do
  start_vus=$last_vus
  end_vus=$((start_vus + increment))

  echo "Menjalankan test dari $start_vus → $end_vus VU..." >> /logs/k6.log

  k6 run --env START_VUS=$start_vus --env END_VUS=$end_vus /scripts/main.js --log-output=file=/logs/k6.log
  exit_code=$?

  if [ $exit_code -ne 0 ]; then
    echo "Terdeteksi error di $end_vus VU. Menghentikan loop." >> /logs/k6.log
    exit $exit_code
  else
    echo "Test sukses dari $start_vus ke $end_vus VU." >> /logs/k6.log
  fi

  last_vus=$end_vus
done
