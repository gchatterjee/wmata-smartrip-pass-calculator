type Address = { City: string; State: string; Street: string; Zip: string }

type Station = {
  Name: string
  Address: Address
  Code: string
  Lat: number
  Lon: number
  LineCode1: string | null
  LineCode2: string | null
  LineCode3: string | null
  LineCode4: string | null
  StationTogether1: string | null
  StationTogether2: string | null
}

type StationList = { Stations: Station[] }

type RailFare = {
  OffPeakTime: number
  PeakTime: number
  SeniorDisabled: number
}

type StationToStationInfo = {
  CompositeMiles: number
  SourceStation: string
  DestinationStation: string
  RailFare: RailFare
  RailTime: number
}

type StationToStationInfoList = {
  StationToStationInfos: StationToStationInfo[]
}
